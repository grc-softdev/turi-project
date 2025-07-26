type BadgeProps = {
    title: string;
    age: string;
    episodes: string;
    format: string;
    rating: number;
    status: string;
    isHovering: boolean;
    colorClass: string;
  };
  
  const Badge = ({
    title,
    age,
    episodes,
    format,
    rating,
    status,
    isHovering,
    colorClass
  }: BadgeProps) => {
    const flooteredRating = Math.floor(rating);
    return (
      <div className={`flex flex-col transform transition-transform ease-in-out duration-300 bg-white ml-[220px] p-14 rounded-md mt-6 min-w-72 absolute z-30 shadow-txtcatg ${isHovering ? 'scale-100' : 'scale-0'}`}>
        <div className="flex flex-col bg-white rotate-45 h-6 w-4 -top-8 -ml-14 py-2 relative -z-20">
          {" "}
        </div>
        <div className="flex -mt-20 items-center justify-between">
          <h4 className={`flex items-center -ml-10 mt-4 text-${colorClass} text-sm`}>
            {title}
          </h4>
          <div className="flex items-center gap-1">
            <svg
              color="rgb(123,213,85)"
              className="mt-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              role="img"
              width="1em"
              viewBox="0 0 496 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                fill="currentColor"
              ></path>
            </svg>
            <h5 className="flex text-lead mt-3 -mr-9 text-md ">
              {flooteredRating}%
            </h5>
          </div>
        </div>
        <div>
          <span className="flex -ml-10  mt-3 text-[12.5px] text-coffee">
            {age || "Teens 12 or older"}
          </span>
          <span className="flex -ml-10 text-[13px] mb-4 font-normal text-txtcard">
            {format} {"  "}
            <span className="ml-1 mr-2 font-bold">·</span> {"   "} {episodes}{" "}
            Episodes
          </span>
          <span className={`flex items-center justify-center -ml-10 -mb-9 mr-14 px-1 w-16 text-xs rounded-xl bg-${colorClass} text-white`}>
            {status}
          </span>
        </div>
      </div>
    );
  };
  
  export default Badge;
  