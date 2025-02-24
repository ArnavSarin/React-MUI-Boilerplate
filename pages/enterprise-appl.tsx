import { IdentityContact } from '../src/enterprise-application/IdentityContact';
import Application from '../components /application/Application';
import { ReactElement } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import { BusinessAddress } from '../src/enterprise-application/BusinessAddress';
import { IdentityContactSchema } from '../schema/IdentityContactSchema';
import { BusinessAddressSchema } from '../schema/BusinessAddressSchema';
import LoginIcon from '@mui/icons-material/Login';
import { LoginInformation } from '../src/enterprise-application/LoginInformation';
import { LoginInformationSchema } from '../schema/LoginInformationSchema';

export default function EnterpriseAppl() {
    return (
        <Application
            applicationList={[
                {
                    title: 'Identity & Contact',
                    icon: (
                        <PersonIcon sx={{ height: '1.5em', width: '1.5em' }} />
                    ) as ReactElement<{}>,
                    children: (<IdentityContact />) as ReactElement<{}>,
                    schema: IdentityContactSchema,
                },
                {
                    title: 'Business Address',
                    icon: (
                        <BusinessIcon
                            sx={{ height: '1.5em', width: '1.5em' }}
                        />
                    ) as ReactElement<{}>,
                    children: (<BusinessAddress />) as ReactElement<{}>,
                    schema: BusinessAddressSchema,
                },
                {
                    title: 'Login Information',
                    icon: (
                        <LoginIcon sx={{ height: '1.5em', width: '1.5em' }} />
                    ) as ReactElement<{}>,
                    children: (<LoginInformation />) as ReactElement<{}>,
                    schema: LoginInformationSchema,
                },
            ]}
        />
    );
}
