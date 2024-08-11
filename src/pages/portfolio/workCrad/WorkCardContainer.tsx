import { useContext } from "react";
import { Helmet } from "react-helmet";
import { WorkCardContext } from "../../../context/workCardContext";

function WorkCardContainer({ children }: { children: React.ReactNode }) {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	return (
		<div className="flex flex-col w-4/5 min-h-screen gap-6 transition-colors duration-500 cursor-default xl:min-h-fit 2k:h-[calc(100vh-18rem)] xl:h-[calc(100vh-16rem)] xl:grid xl:grid-cols-6 xl:grid-rows-12">
			<Helmet>
				<meta
					name="description"
					content={workCardContext.workCardData.description}
				/>
				<meta
					property="og:title"
					content={`Portfolio/${workCardContext.workCardData.title} - PolyME`}
				/>
				<meta property="og:url" content={window.location.href} />
				<meta
					property="og:image"
					content={`https://mmq.dev/projects/project-${workCardContext.workCardData.title.replaceAll(" ", "+")}`}
				/>
				<meta
					property="og:image:alt"
					content={`PolyME-Portfolio/${workCardContext.workCardData.title}`}
				/>
				<meta
					property="og:description"
					content={workCardContext.workCardData.description}
				/>
			</Helmet>
			{children}
		</div>
	);
}

export default WorkCardContainer;
