import React from "react";
// // import { FullPageSpinner, FullPageErrorFallback } from "components/lib";
// import { useQuery } from "react-query";

// const initialState = {
//   colors: [],
// };
// const ColorsContext = React.createContext(initialState);
// ColorsContext.displayName = "ColorContext";

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
//   // const {
//   //   data: user,
//   //   error,
//   //   isLoading,
//   //   isIdle,
//   //   isError,
//   //   isSuccess,
//   // } = useQuery();

//   // if (isLoading || isIdle) {
//   //   return <FullPageSpinner />;
//   // }

//   // if (isError) {
//   //   return <FullPageErrorFallback error={error} />;
//   // }

//   // if (isSuccess) {
//   const value = { hi: "hi" };
//   // 🐨 wrap all of this in the AuthContext.Provider and set the `value` to props
//   return <ColorsContext.Provider value={value} {...props} />;
//   // }
// };

// export { useColors, ColorsContextProvider };
