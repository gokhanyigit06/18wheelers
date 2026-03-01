import React from 'react';

interface AdUnitProps {
    type: 'leaderboard' | 'mrec' | 'sidebar';
    className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ type, className = '' }) => {
    const typeClass = {
        leaderboard: 'ad-leaderboard',
        mrec: 'ad-mrec',
        sidebar: 'ad-sidebar-sticky',
    }[type];

    return (
        <div
            className={`ad-container ${typeClass} ${className}`}
            aria-hidden="true"
        >
            <div style={{ fontSize: '11px', color: '#444', fontFamily: 'monospace' }}>
                ADSENSE_{type.toUpperCase()}_PLACEHOLDER
            </div>
        </div>
    );
};

export default AdUnit;
