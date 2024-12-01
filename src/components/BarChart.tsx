import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';

export default function BasicBars({ options }: { options?: BarChartProps }) {
    return (
        <BarChart
            colors={[
                '#f1e3f3',
                '#C2BBF0',
                '#8fb8ed',
                '#62bfed',
            ]}
            {...options}
            xAxis={[{ scaleType: 'band', data: ['2023', '2024', '2025'] }]}
            // series={[{ data: [6, 3, 2] }, { data: [4, 1, 6] }, { data: [2, 5, 6] }]}
            width={400}
            height={250}
        />
    );
}