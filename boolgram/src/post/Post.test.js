import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Post from './Post';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders view all comments when more than 2", () => {
  let post = getStubPost()
  post.comments = [
    { "username": "user1", "text": "comment1" },
    { "username": "user2", "text": "comment2" },
    { "username": "user3", "text": "comment3" },
  ];

  act(() => {
    render(<Post post={post} />, container);
  });

  expect(container.textContent).toContain("View all 3 comments");
});

it("does not render view all comments when only 2", () => {
  let post = getStubPost()
  post.comments = [
    { "username": "user1", "text": "comment1" },
    { "username": "user2", "text": "comment2" },
  ];

  act(() => {
    render(<Post post={post} />, container);
  });

  expect(container.textContent).not.toContain("View all 2 comments");
});

it("renders only first 2 comments", () => {
  let post = getStubPost()
  post.comments = [
    { "username": "user1", "text": "comment1" },
    { "username": "user2", "text": "comment2" },
    { "username": "user2", "text": "comment3" },
  ];

  act(() => {
    render(<Post post={post} />, container);
  });

  expect(container.textContent).toContain("comment1");
  expect(container.textContent).toContain("comment2");
  expect(container.textContent).not.toContain("comment3");
});

it("renders liked by text using first liker", () => {
  let post = getStubPost()
  post.likes = [
    { "username": "user1", "profile_picture": "user1picture" },
    { "username": "user2", "profile_picture": "user2picture" },
    { "username": "user3", "profile_picture": "user3picture" },
  ];

  act(() => {
    render(<Post post={post} />, container);
  });

  expect(container.textContent).toContain("Liked by user1 and 2 others");
});

it("renders liked by text correctly with 2 likes", () => {
  let post = getStubPost()
  post.likes = [
    { "username": "user1", "profile_picture": "user1picture" },
    { "username": "user2", "profile_picture": "user2picture" },
  ];

  act(() => {
    render(<Post post={post} />, container);
  });

  expect(container.innerHTML).toContain("<span>Liked by <strong>user1</strong> and <strong>1</strong> other</span>");
});

it("renders liked by text correctly with only 1 likes", () => {
  let post = getStubPost()
  post.likes = [
    { "username": "user1", "profile_picture": "user1picture" }
  ];

  act(() => {
    render(<Post post={post} />, container);
  });

  expect(container.innerHTML).toContain("<span>Liked by <strong>user1</strong>");
  expect(container.textContent).not.toContain("and 0 other");
});

function getStubPost() {
  return {
    "profile_picture": "",
    "profile_name": "some.name",
    "profile_fullname": "SomefullName",
    "post_image": "",
    "post_text": "Post text",
    "date": {
      "date": "2021-08-21 04:33:33.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "comments": [],
    "likes": [],
  }
}