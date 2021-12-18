import React from 'react';

import { LoaderContainer, LoaderOverlay } from './preloader.styles';

const PreLoader = WrappedComponent => {
    const Loader = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <LoaderOverlay>
                <LoaderContainer />
            </LoaderOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            );
    };
    return Loader;
};

export default PreLoader;