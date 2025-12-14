import axios from 'axios';
import { CycleSnapshot, BatterySummary } from '../types';

const API_BASE_URL = 'https://zenfinity-intern-api-104290304048.europe-west1.run.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const batteryAPI = {
  // Get summary of all accessible batteries
  async getSummary(imei?: string): Promise<BatterySummary[]> {
    const params = imei ? { imei } : {};
    const response = await api.get<BatterySummary[]>('/api/snapshots/summary', { params });
    return response.data;
  },

  // Get cycle snapshots for a specific battery
  async getSnapshots(
    imei: string,
    limit: number = 100,
    offset: number = 0
  ): Promise<CycleSnapshot[]> {
    const response = await api.get<CycleSnapshot[]>('/api/snapshots', {
      params: { imei, limit, offset },
    });
    return response.data;
  },

  // Get latest cycle snapshot
  async getLatestSnapshot(imei: string): Promise<CycleSnapshot> {
    const response = await api.get<CycleSnapshot>(`/api/snapshots/${imei}/latest`);
    return response.data;
  },

  // Get specific cycle snapshot
  async getCycleSnapshot(imei: string, cycleNumber: number): Promise<CycleSnapshot> {
    const response = await api.get<CycleSnapshot>(
      `/api/snapshots/${imei}/cycles/${cycleNumber}`
    );
    return response.data;
  },
};


