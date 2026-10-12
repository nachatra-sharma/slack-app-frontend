import React from "react";

type ProviderType = React.ComponentType<{
  children: React.ReactNode;
}>;

const CombineContext = (...providers: ProviderType[]) => {
  return ({ children }: { children: React.ReactNode }) => {
    return providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children);
  };
};

export default CombineContext;
