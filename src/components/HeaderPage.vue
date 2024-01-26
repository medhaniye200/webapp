<template>
  <v-responsive>
    <v-card>
      <v-layout>
        <v-app-bar color="primary" prominent>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>My Vue App</v-toolbar-title>

          <!-- Search icon -->
          <v-btn @click="toggleSearchBar" variant="text" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn variant="text" icon="mdi-filter"></v-btn>
        </v-app-bar>

        <!-- Search bar -->
        <div v-if="showSearchBar" class="search-bar">
          <input type="text" v-model="searchData" placeholder="Search..." />
          <v-btn @click="search" variant="text" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>

        <!-- Display search results -->
        <div v-if="searchResults.length > 0">
          <h2>Search Results:</h2>
          <ul>
            <li v-for="result in searchResults" :key="result.id">
              {{ result.name }}
            </li>
          </ul>
        </div>
      </v-layout>
    </v-card>
  </v-responsive>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderPage",
  data() {
    return {
      drawer: false,
      showSearchBar: false, // Add a data property to control the visibility of the search bar
      searchData: "",
      searchResults: [],
    };
  },
  methods: {
    logOut() {
      // Your existing code
    },
    toggleSearchBar() {
      this.showSearchBar = !this.showSearchBar; // Toggle the visibility of the search bar
    },
    search() {
      console.log("Search button clicked");
      console.log("Search query:", this.searchData);

      axios
        .get("https://api.example.com/users", {
          params: {
            query: this.searchData,
          },
        })
        .then((response) => {
          console.log("Search results:", response.data);
          this.searchResults = response.data;
        })
        .catch((error) => {
          console.error("Error searching users:", error);
        });
    },
  },
};
</script>

<style>
.search-bar {
  display: flex;
  align-items: center;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 16px; /* Add margin to separate from the app bar */
}

.search-bar input {
  flex: 1;
  border: none;
  padding: 4px;
}

.search-bar v-btn {
  margin-left: 8px;
}
</style>
