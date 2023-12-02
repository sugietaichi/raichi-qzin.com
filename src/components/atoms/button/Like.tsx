"use client"
import React, { useEffect } from 'react';
import { useToggle } from 'react-use';
import { IconHeart } from '../icons/icons';
import useLikeJobs from '../../../hooks/useLikeJobs';

const Like = ({
    jobId // ジョブIDをプロップとして追加
}: {
    jobId: string
}): JSX.Element => {
    const { jobIds, like, unlike } = useLikeJobs();
    const [liked, setLiked] = useToggle(false);

    useEffect(() => {
        if (jobIds.includes(jobId)) {
            setLiked(true)
        }
    }, [jobId, jobIds, setLiked])

    return (
        <>
            {liked
                ?
                <button
                    onClick={() => {
                        unlike(jobId)
                        setLiked(false)
                    }}
                >
                    <IconHeart {...{
                        stroke: "red",
                        fill: "red"
                    }} />
                </button>
                :
                <button
                    onClick={() => {
                        like(jobId)
                        setLiked(true)
                    }}
                >
                    <IconHeart {...{
                        stroke: "white",
                        fill: "white"
                    }} />
                </button>
            }
        </>
    );
};

export default Like;
