import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//* createSelector => creates a memoized selector
//* createSelector([input selector], output function)
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
