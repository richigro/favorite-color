import React from "react";
// import { useQuery } from "react-query";

// // import { FullPageSpinner, FullPageErrorFallback } from "components/lib";
// import { getColors } from "services/colorsApi";

// interface Color {
//   label: string;
//   value: string;
// }
// interface ColorsContextInterface {
//   colors: Color[];
// }
// const ColorsContext = React.createContext<ColorsContextInterface>({
//   colors: [],
// });
// ColorsContext.displayName = "ColorContext";

// const initialState: { colors: Color[] } = {
//   colors: [],
// };
// function useColors() {
//   const context = React.useContext(ColorsContext);
//   if (!context) {
//     throw new Error(
//       "the useColors hook must be used within an ColorsContextProvider."
//     );
//   }
//   return context;
// }

// const ColorsContextProvider = (props: React.HTMLProps<HTMLDivElement>) => {
//   const { data, error, isLoading, isIdle, isError, isSuccess } = useQuery(
//     "colors",
//     () => getColors()
//   );

//   if (isLoading || isIdle) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error</div>;
//   }

//   if (isSuccess) {
//     const value = { colors: [] };
//     // 🐨 wrap all of this in the AuthContext.Provider and set the `value` to props
//     return <ColorsContext.Provider value={value} {...props} />;
//   }
// };

// export { useColors, ColorsContextProvider };
