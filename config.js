/**
 * การตั้งค่าระบบจองรถ Sawasdee Cup 2026 (สำหรับ GitHub Pages)
 * -------------------------------------------------------------
 * 1. นำ URL ที่ได้จากการ Deploy Web App ใน Google Apps Script (ลงท้ายด้วย /exec)
 *    มาวางในช่อง API_URL ด้านล่าง
 * 2. หากยังไม่ใส่ API_URL หน้าเว็บจะแสดงกล่องให้กรอก URL อัตโนมัติ (หรือส่งผ่าน ?api=... ใน URL ได้)
 */

const CONFIG = {
  // นำ Web app URL จาก Apps Script มาวางตรงนี้ เช่น 'https://script.google.com/macros/s/AKfycbx.../exec'
  API_URL: 'https://script.google.com/macros/s/AKfycbx7qTkiT5sRjZ33ktxr_H2EC7X5tyGCzo3IrDZ66HpJVPyu5BHP5Nsyon-Uyyu49M6vkQ/exec',

  // ฟังก์ชันดึง URL ที่ใช้งานจริง (รองรับ query parameter ?api= และ localStorage)
  getApiUrl: function() {
    // 1. ตรวจสอบจากค่า CONFIG ด้านบน
    if (this.API_URL && this.API_URL.trim().length > 10) {
      return this.API_URL.trim();
    }
    // 2. ตรวจสอบจาก Query String ?api=
    const params = new URLSearchParams(window.location.search);
    const queryApi = params.get('api');
    if (queryApi && queryApi.trim().length > 10) {
      localStorage.setItem('swc26_api_url', queryApi.trim());
      return queryApi.trim();
    }
    // 3. ตรวจสอบจาก localStorage ที่เคยบันทึกไว้
    const saved = localStorage.getItem('swc26_api_url');
    if (saved && saved.trim().length > 10) {
      return saved.trim();
    }
    return '';
  },

  // บันทึก URL ลง localStorage
  setApiUrl: function(url) {
    if (url && url.trim().length > 10) {
      localStorage.setItem('swc26_api_url', url.trim());
    }
  }
};
