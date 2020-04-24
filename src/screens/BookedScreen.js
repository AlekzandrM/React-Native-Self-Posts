import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post";

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.push("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };

  const bookedPosts = useSelector((state) => state.post.bookedPosts);

  return <PostList data={bookedPosts} onOpen={openPostHandler} />;
};

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Избранное",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drower"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});
