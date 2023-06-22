import { createContext, useEffect, useState } from "react";

export type CaseIds = Array<{
  case_id: string;
  _id: string;
}>;

type CaseContextType = {
  caseIds: CaseIds | null;
  setCaseIds: React.Dispatch<React.SetStateAction<CaseIds | null>>;
};

type CasesContextProviderProps = {
  children: React.ReactNode;
};

export const CasesContext = createContext<CaseContextType | null>(null);

export const CasesContextProvider = ({
  children,
}: CasesContextProviderProps) => {
  const [caseIds, setCaseIds] = useState<CaseIds | null>(null);

  return (
    <CasesContext.Provider value={{ caseIds, setCaseIds }}>
      {children}
    </CasesContext.Provider>
  );
};
