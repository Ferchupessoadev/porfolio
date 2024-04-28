export function LinkItem({ hrefId, infoLink }) {
  return (
    <>
      <li>
        <a
          class="px-5 font-firaCode font-extrabold py-2 transition-colors duration-200 ease-in dark:text-white text-black hover:bg-[rgba(0_0_0_/_.1)] dark:hover:bg-[rgba(255_255_255_/_.1)] rounded-full"
          href={hrefId}
        >
          {infoLink}
        </a>
      </li>
    </>
  );
}
