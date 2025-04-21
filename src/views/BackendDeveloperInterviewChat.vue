<template>
  <div class="interview-chat">
    <header class="chat-header">
      <i class="back-icon" @click="goBack">←</i>
      <h3>模拟面试</h3>
    </header>

    <div class="chat-content">
      <div class="chat-item" v-for="(msg, index) in chatMessages" :key="index">
        <div v-if="msg.isMe" class="my-message">
          <p>{{ msg.content }}</p>
        </div>
        <div v-else class="system-message">
          <img src="@/assets/images/interviewer.png" alt="面试官" class="avatar">
          <p>{{ msg.content }}</p>
        </div>
      </div>
    </div>

    <div class="camera-container">
      <video ref="videoElement" autoplay muted class="camera-view"></video>
    </div>

    <div class="input-group">
      <button @click="startVoiceInput" :disabled="loading || recognizing">
        {{ recognizing ? '听写中...' : '语音输入' }}
      </button>
      <input type="text" v-model="inputContent" placeholder="这里输入内容..." :disabled="loading">
      <button @click="sendMessage" :disabled="loading">{{ loading ? '发送中...' : '发送' }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElevenLabsClient } from 'elevenlabs';

const router = useRouter();
const chatMessages = ref([
  { content: '您好，欢迎参加本次职位面试。我是您的面试官，请向我打个招呼开启本次面试吧。', isMe: false },
]);
const inputContent = ref('');
const loading = ref(false); // 用于显示加载状态
const recognizing = ref(false); // 是否正在语音识别
const apiKey = "EMPTY"; // 替换为你的 API 密钥
const apiBase = "http://127.0.0.1:6006/v1"; // 替换为你的云服务器地址
let recognition; // SpeechRecognition 实例

const elevenLabsApiKey = "sk_2d46932f09a951802f82c0e355b848e9e44ee23eb4637b56"; // 替换为你的 ElevenLabs API 密钥
const elevenLabsClient = new ElevenLabsClient({
  apiKey: elevenLabsApiKey, // 使用你的 ElevenLabs API 密钥
});

const videoElement = ref(null);
let mediaStream = null;

// 开启摄像头
const startCamera = async () => {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoElement.value) {
      videoElement.value.srcObject = mediaStream;
    }
  } catch (error) {
    console.error('无法访问摄像头:', error);
    alert('无法访问摄像头，请检查权限设置或设备连接。');
  }
};

// 停止摄像头
const stopCamera = () => {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
  }
};

const goBack = () => {
  router.back();
};

// 初始化语音识别
onMounted(() => {
  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      recognizing.value = true;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      inputContent.value = transcript;
    };

    recognition.onerror = (event) => {
      console.error('语音识别错误:', event.error);
    };

    recognition.onend = () => {
      recognizing.value = false;
      if (inputContent.value.trim()) {
        sendMessage(); // 自动发送文字内容
      }
    };
  } else {
    console.warn('当前浏览器不支持语音识别功能');
  }

  // 监听键盘事件
  window.addEventListener('keydown', handleKeydown);
  startCamera();
});

onUnmounted(() => {
  if (recognition) recognition.abort();
  window.removeEventListener('keydown', handleKeydown);
  stopCamera();
});

// 处理键盘按下事件
const handleKeydown = (event) => {
  if (event.key.toLowerCase() === 'b' && !recognizing.value) {
    startVoiceInput(); // 按下 B 键开始录音
  }
};

// 开始语音输入
const startVoiceInput = () => {
  if (recognition) {
    recognition.start();
  } else {
    alert('当前浏览器不支持语音识别功能');
  }
};

// 文字转语音
const textToSpeech = async (text) => {
  try {
    const voiceId = "4VZIsMPtgggwNg7OXbPY"; // 替换为你的实际语音 ID
    const modelId = "eleven_flash_v2_5"; // 替换为你想使用的具体语音模型 ID

    // 检查 text 是否为空
    if (!text || text.trim() === "") {
      throw new Error("文本内容不能为空");
    }

    // 调用 ElevenLabs API
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': elevenLabsApiKey, // 使用你的 ElevenLabs API 密钥
      },
      body: JSON.stringify({
        text,
        model_id: modelId, // 指定具体的语音模型
        voice_settings: {
          stability: 0.5, // 调整语音稳定性
          similarity_boost: 0.75, // 提高语音自然度
        },
        output_format: "mp3_44100_128", // 指定输出格式
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("ElevenLabs API 调用失败:", errorDetails);
      throw new Error(`语音合成失败，状态码：${response.status}`);
    }

    // 将响应转换为音频文件
    const audioBuffer = await response.arrayBuffer();
    const audioBlob = new Blob([audioBuffer], { type: "audio/mpeg" });
    const audioUrl = URL.createObjectURL(audioBlob);

    // 播放音频并调整播放速度
    const audio = new Audio(audioUrl);
    audio.playbackRate = 1.15; // 设置播放速度，1.0 为正常速度，大于 1.0 为更快
    audio.play();
  } catch (error) {
    console.error("语音合成失败:", error);
    alert(`语音合成失败，请稍后再试。错误详情：${error.message}`);
  }
};

const sendMessage = async () => {
  if (inputContent.value.trim()) {
    // 添加用户消息到聊天记录
    chatMessages.value.push({ content: inputContent.value, isMe: true });
    const userMessage = inputContent.value;
    inputContent.value = '';
    loading.value = true;

    try {
      // 构造完整的对话历史，确保严格的 user/assistant 交替顺序
      const messages = [];
       
      // 首先添加系统消息
      messages.push({
        role: 'system',
        content: '你是后端开发工程师面试官，来面试一个计算机专业学生。当你收到用户发“再见”时，你需要总结下用户的面试表现，并给出改进建议。'
      });

      // 重新构建消息数组，确保严格的 user/assistant 交替顺序
      const formattedMessages = [];
      let currentRole = 'assistant'; // 从 assistant 开始，因为第一条消息是系统的欢迎语

      chatMessages.value.forEach((msg) => {
        const role = msg.isMe ? 'user' : 'assistant';
        
        // 只有当角色交替时才添加消息
        if (role !== currentRole) {
          formattedMessages.push({
            role: role,
            content: msg.content
          });
          currentRole = role;
        }
      });

      // 如果最后一条消息不符合交替顺序，则不添加
      messages.push(...formattedMessages);

      // 打印请求消息，用于调试
      console.log('发送的消息:', messages);

      // 调用后端 API，启用流式输出
      const response = await fetch(`${apiBase}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: messages,
          stream: true
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API 错误响应:', errorText);
        throw new Error(`API 调用失败，状态码：${response.status}`);
      }

      // 处理流式输出
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let fullResponse = '';
      let tempContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(line => line.trim() !== '');
        
        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const json = JSON.parse(line.substring(5));
              const content = json.choices?.[0]?.delta?.content || '';
              if (content) {
                fullResponse += content;
                tempContent += content;
              }
            } catch (err) {
              console.error('JSON 解析错误:', err);
            }
          }
        }

        // 更新聊天界面
        if (tempContent) {
          if (chatMessages.value[chatMessages.value.length - 1]?.isMe === false) {
            chatMessages.value[chatMessages.value.length - 1].content += tempContent;
          } else {
            chatMessages.value.push({ content: tempContent, isMe: false });
          }
          tempContent = '';
        }
      }

      // 完整回复生成后调用语音合成
      if (fullResponse) {
        await textToSpeech(fullResponse);
      }

    } catch (error) {
      console.error('发送消息失败:', error);
      chatMessages.value.push({
        content: `抱歉，获取回复失败，请稍后再试。错误详情：${error.message}`,
        isMe: false,
      });
    } finally {
      loading.value = false;
    }
  }
};
</script>

<style scoped>
.interview-chat {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.back-icon {
  margin-right: 15px;
  font-size: 18px;
  cursor: pointer;
}

.chat-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chat-item {
  align-self: flex-end;
}

.my-message {
  max-width: 70%;
  background: #e3f2fd;
  padding: 10px 15px;
  border-radius: 20px;
  align-self: flex-end;
}

.system-message {
  display: flex;
  align-items: center;
  gap: 10px;
}

.system-message .avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.system-message p {
  max-width: 80%;
  background: white;
  padding: 10px 15px;
  border-radius: 20px;
}

.camera-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 200px;
}

.camera-view {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.input-group {
  display: flex;
  padding: 15px;
  background: white;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
}

.input-group input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  margin-right: 10px;
}

.input-group button {
  padding: 10px 20px;
  background: #ff6644;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.input-group button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.input-group button:first-child {
  margin-right: 10px;
}
</style>