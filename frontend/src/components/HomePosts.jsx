// import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4">
      {/* Left */}
      <div className="w-full md:w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={post.photo}
          alt="Post"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      {/* Right */}
      <div className="flex flex-col w-full md:w-[65%]">
        <h1 className="text-lg font-bold md:mb-2 mb-1 md:text-2xl text-black">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-[#F59E0B] items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm text-[#292a2b]">
            <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
            <p>{new Date(post.updatedAt).toLocaleTimeString()}</p>
          </div>
        </div>
        <p className="text-sm md:text-md text-black">
          {post.desc.slice(0, 200) + " ...Read more"}
        </p>
      </div>
    </div>
  );
};
export default HomePosts;

// DemoHomePosts Component
// const DemoHomePosts = () => {
//   const samplePost = {
//     photo: "https://via.placeholder.com/200", // Example image URL
//     title: "Sample Blog Post Title",
//     username: "sampleuser",
//     updatedAt: new Date().toISOString(),
//     desc: "This is a short description of the sample blog post. It is meant to demonstrate the functionality of the HomePosts component.",
//   };

//   return (
//     <div className="p-4">
//       <HomePosts post={samplePost} />
//     </div>
//   );
// };

// export default DemoHomePosts;
