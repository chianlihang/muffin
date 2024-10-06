import { error } from '@sveltejs/kit';

export const POST = async ({request}) => {
    const {offermuffin, acceptmuffin} = await request.json();
    console.log(offermuffin);

    const res = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeRDVJ4jb4__bTn2SQHrvQLFxylXfWWmhT7InlxaC_lFTNHJw/formResponse?usp=pp_url&entry.764065166=${offermuffin}&entry.1068635958=${acceptmuffin}&submit=Submit`);
    
    if (res.status !== 200) {
        throw error(404, 'failed');
    }

    return new Response(
        JSON.stringify({ message: "success" }),
        {status: 200}
    );
}