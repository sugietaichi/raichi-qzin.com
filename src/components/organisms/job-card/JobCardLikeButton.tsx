import { IconHeart } from "@/components/atoms/icons/icons";
import useLikeJobs from "@/hooks/useLikeJobs";

export const JobCardLikeButton = ({ id }: { id: string }) => {
    const { like, unlike, isLiked } = useLikeJobs()
    const sIcon: {
        stroke: "red" | "white";
        fill: "red" | "white";
    } = isLiked(id)
            ? { stroke: "white", fill: "red" }
            : { stroke: "red", fill: "white" }

    return (
        <div onClick={() => isLiked(id) ? unlike(id) : like(id)}>
            <IconHeart {...sIcon} />
        </div>
    )
}