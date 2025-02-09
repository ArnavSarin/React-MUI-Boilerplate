import { ReactComponent } from 'ag-grid-react/dist/types/src/shared/reactComponent';
import React from 'react';

export interface InsightProps {
    // icon:
    helperText: string;
    primaryText: string;
    secondaryText: React.ComponentType<{}>;
}
