import React, { useEffect } from 'react';

export type GoogleAdsProps = {};
export const GoogleAds = (props) => {
  useEffect(() => {
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({});
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-format="fluid"
      data-ad-layout-key="-Yo-ur-la-yo-ut-ke-y"
      data-ad-client="Yo-ur-ad-client-id"
      data-ad-slot={props.slot}
      data-full-width-responsive="true"
    ></ins>
  );
};
