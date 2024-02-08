export interface Repeat {
    cycle: 'daily' | 'weekly' | 'bi-weekly' | 'monthly' | 'yearly';
    end : 'never' | Date | number;
}