import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    school: '',
    name: '',
    email: '',
    avatar: ''
  }),
  actions: {
    setUserInfo(school, name, email) {
      this.school = school;
      this.name = name;
      this.email = email;
    },
    clearUserInfo() {
      this.school = '';
      this.name = '';
      this.email = '';
      this.avatar = '';
    }
  }
});