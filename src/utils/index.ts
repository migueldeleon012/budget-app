import { key } from '@/store';
import { useStore } from 'vuex';

const store = useStore(key);

const checkResetDataOnFirstDay = () => {
  const now = new Date();
  const day = now.getDate();

  if (day === 1) {
    store.commit('resetMonthly');
  }
};

const startDailyCheck = () => {
  const now = new Date();
  const timeUntilMidnight =
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    ).getTime() - now.getTime();

  setTimeout(() => {
    checkResetDataOnFirstDay();
    setInterval(checkResetDataOnFirstDay, 86400000);
  }, timeUntilMidnight);
};

export default startDailyCheck;
