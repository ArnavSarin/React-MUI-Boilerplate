import Insight from '../components /insight/Insight';
import { Typography } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import MultiCategoryCard from '../components /multicategory-card/MultiCategoryCard';

const Funds = () => {
    return (
        <Insight
            icon={
                <BuildIcon
                    sx={{ color: '#00AC4F', height: '1.5em', width: '1.5em' }}
                />
            }
            title={'Funds'}
            primaryText={'Temporary Text'}
            secondaryText={
                <Typography variant={'h5'}>{'16% this month'}</Typography>
            }
        />
    ) as ReactNode;
};

const ProjectsComplete = () => {
    return (
        <Insight
            icon={
                <BuildIcon
                    sx={{ color: '#00AC4F', height: '1.5em', width: '1.5em' }}
                />
            }
            title={'Projects Complete'}
            primaryText={'Temporary Text'}
            secondaryText={
                <Typography variant={'h5'}>{'1 this month'}</Typography>
            }
        />
    ) as ReactNode;
};

const ActiveProjects = () => {
    return (
        <Insight
            icon={
                <BuildIcon
                    sx={{ color: '#00AC4F', height: '1.5em', width: '1.5em' }}
                />
            }
            title={'Active Projects'}
            primaryText={'Temporary Text'}
            secondaryText={
                <Typography variant={'h5'}>{'2 this month'}</Typography>
            }
        />
    ) as ReactNode;
};

const EnterpriseInsightsCard = () => {
    return (
        <MultiCategoryCard
            sx={{ width: '100%' }}
            categoryList={
                [
                    <Funds />,
                    <ProjectsComplete />,
                    <ActiveProjects />,
                ] as ReactElement<{}>[]
            }
        />
    );
};

export default EnterpriseInsightsCard;
