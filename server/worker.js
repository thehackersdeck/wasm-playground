import { queues } from './utils/queues';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { exec } from 'child_process';

//Process jobs on queue
Object.entries(queues).forEach(([queueName, queue]) => {
    queue.process((job, done) => {
        done();
    });
});

