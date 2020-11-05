// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { CommonInstancesSectionProps } from 'common/components/cards/common-instances-section-props';
import { ReactFCWithDisplayName } from 'common/react/named-fc';
import { LeftNavItemKey } from './left-nav-item-key';

export type ContentPageInfo = {
    title: string;
    description: JSX.Element;
    instancesSectionComponent: ReactFCWithDisplayName<CommonInstancesSectionProps>;
};

export type ContentPagesInfo = {
    [key in keyof LeftNavItemKey]: ContentPageInfo;
};
