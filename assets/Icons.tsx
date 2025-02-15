import { SvgIcon } from '@mui/material';
import AccountHistorySVG from './svg/AccountHistory.svg';
import DashboardSVG from './svg/Dashboard.svg';
import FundingSVG from './svg/Funding.svg';
import HelpSVG from './svg/Help.svg';
import ProjectsSVG from './svg/Projects.svg';
import SocialBrick from './png/SocialBrick.png';

export const SocialBrickIcon = () => {
    return <img src={SocialBrick} alt="logo" />;
};

export const AccountHistoryIcon = () => {
    return (
        <SvgIcon>
            <AccountHistorySVG />
        </SvgIcon>
    );
};
export const DashboardIcon = () => {
    return (
        <SvgIcon>
            <DashboardSVG />
        </SvgIcon>
    );
};
export const FundingIcon = () => {
    return (
        <SvgIcon>
            <FundingSVG />
        </SvgIcon>
    );
};
export const HelpIcon = () => {
    return (
        <SvgIcon>
            <HelpSVG />
        </SvgIcon>
    );
};
export const ProjectsIcon = () => {
    return (
        <SvgIcon>
            <ProjectsSVG />
        </SvgIcon>
    );
};
