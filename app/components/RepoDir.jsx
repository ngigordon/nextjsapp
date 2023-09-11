import Link from "next/link"
async function fetchRepoContents(name) {
    await new Promise((resolve) => {setTimeout(resolve,3000)   
    })
    const response = await fetch(`https://api.github.com/repos/ngigordon/${name}/contents`,{
      next: {
        revalidate: 60,
      }
    })
    const contents = await response.json()
    return contents;
}
const RepoDir = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter((content) => content.type === "dir")
    // console.log(dirs);
    return <>
        <h3>Directories</h3>
        <ul>
            {dirs.map((dir) => (
                <li key={dir.id}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>
                        {dir.path}
                    </Link>
                </li>
            ))}
        </ul>
    </>;
};

export default RepoDir;
