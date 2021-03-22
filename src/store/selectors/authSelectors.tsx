
import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = (state: any) => {
  return state.auth;
};

export const isAuthenticatedSelector = createSelector([selectAuth], (state) =>
  state ? state.isAuthenticated : false
);

export const emailSelector = createSelector([selectAuth], (state) =>
  state ? state.email : null
);

export const authLoadingSelector = createSelector([selectAuth], (state) =>
  state ? state.isLoading : null
);

export const authErrorSelector = createSelector([selectAuth], (state) =>
  state ? state.error : null
);