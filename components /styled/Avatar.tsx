import { styled } from '@mui/material/styles';
import { Avatar, AvatarProps } from '@mui/material';

export const InsightAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
    backgroundColor: '#D3FFE7',
}));

export const ApplicationAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
    backgroundColor: '#0f1729',
}));
