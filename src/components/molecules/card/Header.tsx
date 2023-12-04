import { IconHeart } from "@/components/atoms/icons/icons";
import useLikeJobs from "@/hooks/useLikeJobs";


export const Header = ({
    jobId,
    title
}: {
    jobId: string
    title: string
}) => {
    const { like, unlike, isLiked } = useLikeJobs();

    return (
        <div className="flex items-center justify-between mb-4 bg-blue-500 rounded-t">
            <div>
                <h5 className="text-xl font-bold leading-none text-white p-2 m-2">{title}</h5>
            </div>
            <div className="flex items-center mx-2">
                {isLiked(jobId)
                    ?
                    <div onClick={() => unlike(jobId)}>
                        <IconHeart {...{
                            stroke: "white",
                            fill: "red"
                        }} />
                    </div>
                    :
                    <div onClick={() => like(jobId)}>
                        <IconHeart {...{
                            stroke: "red",
                            fill: "white"
                        }} />
                    </div>
                }
            </div>
        </div >
    )
}