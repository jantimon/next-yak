import { withYak } from 'next-yak/withYak';

/** @type {import('next').NextConfig} */
const nextConfig = {

}

export default withYak(
    {
        experiments: {
            debug: {
                filter: (name) => name.includes("page"),
                type: "all"
            }
        }
    }    
, nextConfig)
