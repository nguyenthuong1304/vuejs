import Vue from "vue";
import { MovieService } from "../common/api.service";
import { FETCH_MOVIES } from "./actions.type";
import {
  RESET_STATE,
  SET_COMMENTS,
  TAG_ADD,
  TAG_REMOVE,
  SET_ITEM
} from "./mutations.type";

const initialState = {
  items: [],
  totalPage: 0,
  currentPage: 1
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_MOVIES](context, slug) {
    const { data } = await MovieService.get(
      `${slug}?page=${state.currentPage}`
    );
    context.commit(SET_ITEM, data);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ITEM](state, data) {
    state.items = data.data;
    state.totalPage = data.total_page;
    state.currentPage = data.page;
  },
  [SET_COMMENTS](state, comments) {
    state.comments = comments;
  },
  [TAG_ADD](state, tag) {
    state.article.tagList = state.article.tagList.concat([tag]);
  },
  [TAG_REMOVE](state, tag) {
    state.article.tagList = state.article.tagList.filter(t => t !== tag);
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  items(state) {
    return state.items;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
