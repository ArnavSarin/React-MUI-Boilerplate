import { IdentityContact } from '../src/enterprise-application/IdentityContact';
import Application from '../components /application/Application';
import { ReactElement } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import { BusinessAddress } from '../src/enterprise-application/BusinessAddress';
import { IdentityContactSchema } from '../schema/IdentityContactSchema';
import { BusinessAddressSchema } from '../schema/BusinessAddressSchema';

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
            ]}
        />
    );
}
