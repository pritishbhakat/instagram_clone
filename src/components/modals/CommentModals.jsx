import {
	Button,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import Comment from "../comment/Comment";
import usePostComments from "../../hooks/usePostComments";
import { useEffect, useRef } from "react";

const CommentsModal = ({ isOpen, onClose, post }) => {
    const {handlePostComments, isCommenting} = usePostComments()
    const commentRef = useRef(null)
    const commentsContainRef = useRef(null)


    const handleSubmitComment = async (e) => {
        e.preventDefault()
        await handlePostComments(post.id,commentRef.current.value)
        commentRef.current.value = ''
    }

    useEffect(() => {
        const scrollToButtom = () => {
            commentsContainRef.current.scrollTop = commentsContainRef.current.scrollHeight
        }
        if(isOpen){
            setTimeout(() => {
                scrollToButtom()
            },1000)
        }
    },[isOpen,post.comments.length])
	return (
		<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
			<ModalOverlay />
			<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
				<ModalHeader>Comments</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<Flex mb={4} gap={4} flexDir={"column"} maxH={"250px"} overflowY={"auto"} ref={commentsContainRef}>
                        {post.comments.map((comment,index) => (
                            <Comment key={index} comment={comment} />
                        ))}
                    </Flex>
					<form style={{ marginTop: "2rem" }} onSubmit={handleSubmitComment}>
						<Input placeholder='Comment' size={"sm"} ref={commentRef}/>
						<Flex w={"full"} justifyContent={"flex-end"}>
							<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isCommenting}>
								Post
							</Button>
						</Flex>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CommentsModal;