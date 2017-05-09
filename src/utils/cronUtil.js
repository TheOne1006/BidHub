import { CronJob } from 'cron';

const DataSource = {};
export function create(id, time, func) {
  const job = new CronJob({
    cronTime: time,
    onTick: () => {
      func();
    },
    start: true,
    timeZone: 'Asia/Shanghai',
  });

  // if (DataSource[id]) {
  //   const curJob = DataSource[id];
  //   curJob.stop();
  // }

  DataSource[id] = job;
}


export default {
  create,
};
