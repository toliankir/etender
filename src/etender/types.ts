export interface ETenderFilter {
    PriceFrom?: number;
    regions?: string[];
    title?: string;
    searchTimeType?: 'today' | 'lastWeek';
    OrganizationName?: string;
}