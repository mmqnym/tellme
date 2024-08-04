function LinksContainer({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex h-fit w-full flex-row items-center gap-3 px-5 py-2">
			{children}
		</section>
	);
}

export default LinksContainer;
