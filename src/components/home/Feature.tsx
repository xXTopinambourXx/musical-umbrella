import { cn } from "../../../lib/utils";
interface FeatureProps {
    title: string,
    description: string,
    icon?: React.ReactNode,
    index: number
}

const Feature: React.FC<FeatureProps> = ({title,description,icon,index}) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-purple",
          (index === 0 || index === 4) && "lg:border-l dark:border-purple",
          index < 4 && "lg:border-b dark:border-purple"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-100 dark:from-purple to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-100 dark:from-purple to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-gray-600 dark:text-gray-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-purple dark:bg-purple group-hover/feature:bg-purple transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-purple dark:text-gray-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    );
  };
  
export default Feature;