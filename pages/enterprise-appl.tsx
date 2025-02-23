import { MasterSchema } from '../schema/MasterSchema';
import { IdentityContact } from '../src/enterprise-application/IdentityContact';
import Application from '../components /application/Application';
import { ReactElement } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { BusinessAddress } from '../src/enterprise-application/BusinessAddress';

export default function EnterpriseAppl() {
    return (
        <Application
            schema={MasterSchema}
            applicationList={[
                {
                    title: 'Identity & Contact',
                    icon: (
                        <PersonIcon sx={{ height: '1.5em', width: '1.5em' }} />
                    ) as ReactElement<{}>,
                    children: (<IdentityContact />) as ReactElement<{}>,
                },
                {
                    title: 'Business Address',
                    icon: (
                        <PersonIcon sx={{ height: '1.5em', width: '1.5em' }} />
                    ) as ReactElement<{}>,
                    children: (<BusinessAddress />) as ReactElement<{}>,
                },
            ]}
        />
    );
}
