import Queue from 'bull';

export const queues = {
    compiler: new Queue('compiler', process.env.REDIS_URL)
};