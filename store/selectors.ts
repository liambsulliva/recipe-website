import { createSelector } from 'reselect';
import { recipe, NotificationItem, Settings, TodoListItem } from '../mock';

export interface RootState {
    recipes: recipe[]
    lists: TodoListItem[]
    notifications: NotificationItem[]
    settings: Settings
  }
  
export const createAppSelector = createSelector.withTypes<RootState>()

export const selectRecipes = createAppSelector(
    [
      state => state.recipes
    ],
    recipes => recipes
  )

export const selectLists = createAppSelector(
    [
        state => state.lists
    ],
    lists => lists
)

export const selectNotifications = createAppSelector(
    [
        state => state.notifications
    ],
    notifications => notifications
)

export const selectSettings = createAppSelector(
    [
        state => state.settings
    ],
    settings => settings
)