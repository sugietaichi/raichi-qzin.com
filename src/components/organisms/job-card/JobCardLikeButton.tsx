import { IconHeart } from "@/components/atoms/icons/icons";
import useLikeJobs from "@/hooks/useLikeJobs";

export const JobCardLikeButton = ({ id }: { id: string }) => {
    const { like, unlike, isLiked } = useLikeJobs()
    const handler = () => isLiked(id) ? unlike : like
    const sIcon: {
        stroke: "red" | "white";
        fill: "red" | "white";
    } = isLiked(id)
            ? { stroke: "white", fill: "red" }
            : { stroke: "red", fill: "white" }

    return (
        <div onClick={handler}>
            <IconHeart {...sIcon} />
        </div>
    )
}