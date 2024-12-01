"use client"
import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, ChartConfigurationCustomTypesPerDataset } from 'chart.js/auto';
import { ChartData } from '@/utils/types';

interface PieChartProps {
    data?: ChartData;
    width?: string | number;
    height?: string | number;
}

function PieChart({
    data,
    width,
    height
}: PieChartProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<ChartConfigurationCustomTypesPerDataset | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Cleanup previous chart instance
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        const config: ChartConfiguration = {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: data.colors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        };

        chartInstanceRef.current = new Chart(ctx, config);

        // Cleanup on unmount
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data]);

    return (
        <div className="relative" style={{ width, height }}>
            <canvas ref={canvasRef} />
        </div>
    );
};


export default PieChart;