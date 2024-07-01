import classNames from 'classnames';

const Card = ({
  children,
  className,
}: {
  children: React.ReactElement[];
  className: string;
}) => (
  <div className={classNames('max-w-xl', className)}>
    <div className="bg-white border dark:border-stone-700 rounded-xl dark:bg-black">
      {children}
    </div>
  </div>
);

export default Card;
