import { useState } from 'react';

export const enterpriseGridData = () => {
    const [rowData, setRowData] = useState([
        {
            'Project Name': 'Project 1',
            State: 'Indianapolis',
            Country: 'United States',
            Started: new Date('2023-10-22'),
            Architect: { name: 'Irin Abraham', position: 'Lead Architect' },
            Status: 'Open for Bids',
        },
        {
            'Project Name': 'Project 2',
            State: 'Andhra Pradesh',
            Country: 'India',
            Started: new Date('2023-10-22'),
            Architect: { name: 'Aarav Patel', position: 'Urban Planner' },
            Status: 'Complete',
        },
        {
            'Project Name': 'Project 3',
            State: 'Eastern Cape',
            Country: 'South Africa',
            Started: new Date('2023-10-22'),
            Architect: { name: 'Aarnik Amin', position: 'Junior Secretary' },
            Status: 'Inactive',
        },
        {
            'Project Name': 'Project 4',
            State: 'Cusco',
            Country: 'Peru',
            Started: new Date('2022-10-22'),
            Architect: {
                name: 'Sofia Martinez',
                position: 'Junior Architect',
            },
            Status: 'Active',
        },
        {
            'Project Name': 'Project 5',
            State: 'Bali',
            Country: 'Indonesia',
            Started: new Date('2023-10-22'),
            Architect: {
                name: 'Noah Williams',
                position: 'Design Architect',
            },
            Status: 'Open for Bids',
        },
        {
            'Project Name': 'Project 6',
            State: 'Queensland',
            Country: 'Australia',
            Started: new Date('2023-11-15'),
            Architect: { name: 'Amelia White', position: 'Interior Architect' },
            Status: 'Active',
        },
        {
            'Project Name': 'Project 7',
            State: 'Bavaria',
            Country: 'Germany',
            Started: new Date('2022-09-10'),
            Architect: {
                name: 'Hugo Schmidt',
                position: 'Residential Architect',
            },
            Status: 'Complete',
        },
        {
            'Project Name': 'Project 8',
            State: 'British Columbia',
            Country: 'Canada',
            Started: new Date('2023-05-30'),
            Architect: {
                name: 'Olivia Taylor',
                position: 'Commercial Architect',
            },
            Status: 'Inactive',
        },
        {
            'Project Name': 'Project 9',
            State: 'Rio de Janeiro',
            Country: 'Brazil',
            Started: new Date('2023-07-12'),
            Architect: { name: 'Mateo Silva', position: 'Landscape Architect' },
            Status: 'Active',
        },
        {
            'Project Name': 'Project 10',
            State: 'Lombardy',
            Country: 'Italy',
            Started: new Date('2021-08-22'),
            Architect: {
                name: 'Giovanni Rossi',
                position: 'Restoration Architect',
            },
            Status: 'Complete',
        },
        {
            'Project Name': 'Project 11',
            State: 'Hokkaido',
            Country: 'Japan',
            Started: new Date('2023-12-05'),
            Architect: { name: 'Haruto Tanaka', position: 'Urban Designer' },
            Status: 'Inactive',
        },
        {
            'Project Name': 'Project 12',
            State: 'Western Cape',
            Country: 'South Africa',
            Started: new Date('2022-06-18'),
            Architect: {
                name: 'Emma Merwe',
                position: 'Healthcare Architect',
            },
            Status: 'Open for Bids',
        },
        {
            'Project Name': 'Project 13',
            State: 'Île-de-France',
            Country: 'France',
            Started: new Date('2023-03-25'),
            Architect: { name: 'Louis Dupont', position: 'Concept Architect' },
            Status: 'Complete',
        },
        {
            'Project Name': 'Project 14',
            State: 'Maharashtra',
            Country: 'India',
            Started: new Date('2022-04-17'),
            Architect: {
                name: 'Priya Sharma',
                position: 'Industrial Architect',
            },
            Status: 'Inactive',
        },
        {
            'Project Name': 'Project 15',
            State: 'New South Wales',
            Country: 'Australia',
            Started: new Date('2023-02-14'),
            Architect: { name: 'Liam Anderson', position: 'Project Architect' },
            Status: 'Active',
        },
    ]);

    return { rowData, setRowData };
};
