import { createSelector } from 'reselect';
import { carbRecipe, NotificationItem, Settings, TodoListItem } from '../mock';

export interface RootState {
    carbRecipes: carbRecipe[]
    lists: TodoListItem[]
    notifications: NotificationItem[]
    settings: Settings
  }
  
export const createAppSelector = createSelector.withTypes<RootState>()

export const selectCarbs = createAppSelector(
    [
      state => state.carbRecipes
    ],
    carbRecipes => carbRecipes
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