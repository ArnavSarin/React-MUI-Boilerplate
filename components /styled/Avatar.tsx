import { styled } from '@mui/material/styles';
import { Avatar, AvatarProps, SvgIconProps } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';

export const InsightAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
    backgroundColor: '#D3FFE7',
}));

export const ApplicationAvatar = styled(Avatar)<AvatarProps>(
    ({ selected }) => ({
        backgroundColor: selected ? '#E2B281' : '#F9FBFF',
    })
);
