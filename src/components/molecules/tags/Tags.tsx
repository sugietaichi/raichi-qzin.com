import { type JSX } from "react";
import { Tag } from "../../atoms/tag/Tag";

export const Tags = ({ tags }: { tags: string[] | undefined }): JSX.Element => {
    return (
        <>
            {tags ?
                (<div className="px-3 py-2 flex flex-wrap">
                    {tags.map((tag) => <Tag key={tag} text={`${tag}`} />)}
                </div>)
                :
                <></>}
        </>
    )
}